import {reqCategoryList} from '@/api/index'

const state = {
    categoryList: []
}
const mutations = {
    CATEGORYLIST(state, categoryList){
        state.categoryList =  categoryList
    }
}
const actions = {
    async categoryList({commit}){
        let result = await reqCategoryList()
        if(result.code === 200){
            commit('CATEGORYLIST', result.data)
        }
    }
}
const getters = {}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}