import requests from "./request";
import mockRequests from "./requestMock";

//获取三级联动分类
export const reqCategoryList = ()=> requests({url: '/product/getBaseCategoryList', method: 'GET'})

//获取轮播图数据
export const reqGetBannerList = ()=> mockRequests('/banner')

//获取floor层数据
export const reqGetFloorList = ()=> mockRequests('/floor')