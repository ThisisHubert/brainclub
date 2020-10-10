# from flask import Flask
from pytorch_transformers import BertTokenizer, BertModel
from transformers import BartTokenizer, BartModel
from sentence_transformers import SentenceTransformer
# from profanity_check import predict_prob
import streamlit as st 
import torch
from sklearn.cluster import AgglomerativeClustering
import numpy as np

# app = Flask(__name__)

# def card():
#     return "This is BrainCloud team, what's up fellas"

# def censoring(input_list):

#     '''
# 		INPUT:
#             input_list : (list of sentences) list of sentences want to check
#         OUTPUT:
#             predictions : (list of booleans) list consists of true/false if ther sentence includes offensiveness or profanity
#     '''

#     threshold = 0.15
#     predictions = []

#     predictions = [prob>threshold for prob in predict_prob(input_list)]

#     return predictions
# @app.route("/",methods=['POST'])
@st.cache 
def class_embedding_from(sentence):
    '''
    #tokenizer = BartTokenizer.from_pretrained('bert-base-uncased')
    tokenizer = BartTokenizer.from_pretrained('facebook/bart-base')
    model = BartModel.from_pretrained('facebook/bart-base')
    input_ids = torch.tensor(tokenizer.encode(sentence)).unsqueeze(0)
    hidden, cls_head = model(input_ids)
    # cls_head = [1, 768]
    embedding = cls_head.squeeze(0)
    # embedding = [768]
    '''
    model = SentenceTransformer('bert-base-nli-mean-tokens')
    embedding = model.encode(sentence)

    # embedding = [768] numpy array

    return embedding
@st.cache(suppress_st_warning=True)
def make_id2embedding(id2sentence):
    id2embedding = {}
    for id, sentence in id2sentence.items():
        print(f"embedding for sentence {id}")
        id2embedding[id] = class_embedding_from(sentence)
    
    # id2embeddings = {id: embedding}

    return id2embedding
@st.cache(suppress_st_warning=True)
def cluster_id2embedding(id2embedding):
    # embeddings = np.array([x.tolist() for x in id2embeddings.values()])
    embeddings = list(id2embedding.values())

    distance_threshold = 17.5
    cluster_numbers = AgglomerativeClustering(n_clusters=None, linkage='ward', distance_threshold=distance_threshold).fit_predict(embeddings)

    id2cluster = {}
    for i, id in enumerate(id2embedding.keys()):
        id2cluster[id] = cluster_numbers[i]
    
    n_clusters = max(cluster_numbers) + 1

    return n_clusters, id2cluster
@st.cache(suppress_st_warning=True)
def display_sentence_clusters(id2sentence, id2cluster, n_clusters):
    sentences_cluster = {}
    for i in range(n_clusters):
        sentences_cluster[i] = []

    for id, sentence in id2sentence.items():
        cluster_id = id2cluster[id]
        sentences_cluster[cluster_id].append(sentence)

    for cluster_num, sentences in sentences_cluster.items():
        st.markdown(f"\nCluster {cluster_num}:\n{sentences}\n")
@st.cache(suppress_st_warning=True)
def organizer(id2sentence):
    '''
        INPUT:
            id2sentence : (dict) with sentence id as key and sentence as its value
        OUTPUT:
            n_clusters : (int) number of clusters
            id2cluster : (dict) with sentence id as key and assigned cluster numebr as its value
    '''
    id2embedding = make_id2embedding(id2sentence)
    n_clusters, id2cluster = cluster_id2embedding(id2embedding)

    return n_clusters, id2cluster



# if __name__== "__main__":
    
id2sentence = {
        0: "automatically mute the voice when you don't intended",
        1: "Chatbot service - where newly joined company member can get the answers via text",
        2: "Chatbot for freshman in universities can ask anything freely via text",
        3: "Loction-based service: the members' location are shown on the map and they can interact with other members via message",
        4: "Meet your neighbor - SNS service"
    }
    
n_clusters, id2cluster = organizer(id2sentence)

st.write(f"\n- {n_clusters} clusters are generated.")
result = display_sentence_clusters(id2sentence, id2cluster, n_clusters)
st.write(result)





# if __name__ == '__main__':
#     app.run(debug=False, host='0.0.0.0', port=5000)