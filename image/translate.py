import json
from collections import OrderedDict

for i in range(1,100):
    name = str(i)
    with open('C:/Users/dmsrh/Desktop/hashlips_art_engine-1.1.2_patch_v5/hashlips_art_engine-1.1.2_patch_v5/build/json/'+name+'.json','r') as f:
        #파일 읽어서 홑따옴표제거
        s = f.read()
        s = s.replace('\t','')
        s = s.replace('\n','')
        s = s.replace(',}','}')
        s = s.replace(',]',']')
        data = json.loads(s)

        #딕셔너리 변경
        dict=data

        dict['seller_fee_basis_points']=500
        dict['symbol']="hi"
        dict2={"address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw", "share": 100}
        dict3={"uri": name+".png", "type": name+"/png"}
        list1=[]
        list2=[]
        list1.append(dict2)
        list2.append(dict3)
        value1={"creators":list1,"files":list2}
        value3={"name": "numbers", "family": "numbers"}
        dict['collection']=value3
        dict['property']=value1
        od=OrderedDict()
        od['name']=dict['name']
        od['symbol']=dict['symbol']
        od['description']=dict['description']
        od['seller_fee_basis_points']= dict['seller_fee_basis_points']
        od['image']=dict['image']
        od['attributes']=dict['attributes']
        od['properties']=dict['property']
        od['collection']=dict['collection']



    #파일에 다시 쓰기
    with open(name+".json", "w") as json_file:
        json.dump(od, json_file,indent=4)
