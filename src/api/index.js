import requests from "./request";

//获取三级联动分类
export const reqCategoryList = ()=> requests({url: '/product/getBaseCategoryList', method: 'GET'})