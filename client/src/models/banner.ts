
// import {queryBanner} from '../services/api'

export default{
    namespace:'banner',
    state:{},
    effects:{
        *fetch({payload,callback},{call}){
            // const response = yield call (queryBanner,payload);
            // if(response.message ==='OK'){
            //   if(callback) callback(true,response.data.list)   
            // } else if(callback) callback(false)
        },
        



    },
    reducers:{}
}