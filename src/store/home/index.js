import { reqCategoryList, reGetBannerList, reqFloorList } from "@/api";

// home模块小仓库
const state = {
    // home仓库中存储三级菜单的数据
    // state中数据默认初始值别瞎写，服务器返回的是对象，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    // 轮播图的数据
    bannerList:[],
    // floor组件的数据
    floorList:[]
};
// mutations是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList = categoryList;
        state.categoryList.length = 16

    },
    GETBANNERLIST(state, bannerList){
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList){
        state.floorList = floorList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        // 返回的结果是Promise，所以我们需要拿到Promise成功的结果，就需要使用await和async
        // console.log(result);
        if(result.code == 200) {
            commit("CATEGORYLIST",result.data);
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}){
        let result = await reGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data);
        }
    },
    // 获取floor数据
    async getFloorList({commit}){
        let result = await reqFloorList();
        if(result.code == 200){
            // 提交mutation
            commit('GETFLOORLIST',result.data);
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}