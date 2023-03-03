// 当前这个模块：API进行统一管理
import requests from './request';
import mockRequests from './mockAjax';
// 三级联动接口
// /api/product/getBaseCategoryList  get  无参数
// 发请求：axios发请求返回结果Promise对象
export const reqCategoryList = ()=>requests({url:'/product/getBaseCategoryList',method:'get'});

// 获取banner（Home首页轮播图接口）
export const reGetBannerList =()=>mockRequests.get('/banner');

// 获取floor数据
export const reqFloorList =()=>mockRequests.get('/floor');

// 获取搜索模块数据 地址：/api/list 请求方式：post 参数：需要带参数

// 当前这个函数需不需要接收外部传递参数
// 当前这个接口(获取搜索模块的数据),给服务器传递一个默认参数[至少是一个空对象]
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params})

// 获取产品的详细信息的接口  URL：/api/item/{ skuId } 请求方式：get
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`,method:'get'})

// 将产品添加到购物车中(获取更新某一个产品的个数)
// /api/cart/addToCart/{ skuId }/{ skuNum }  POST
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({url:`/cart/addToCart/${ skuId }/${ skuNum }`,method:'post'})

// 获取购物车列表数据接口
// URL： /api/cart/cartList  method:get
export const reqCartList = ()=>requests({url:'/cart/cartList',method:'get'});

// 删除购物产品的接口
// /api/cart/deleteCart/{skuId} method:DELETE
export const reqDeleteCartById = (skuId)=>requests({url:`/cart/deleteCart/${skuId}`,method:'delete'});

// 修改商品的选中状态
// /api/cart/checkCart/{skuID}/{isChecked}  method:get
export const reqUpdateCheckedById = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

// 获取验证码
// /api/user/passport/sendCode/{phone} method:get
export const reqGetCode = (phone)=>requests({url:`user/passport/sendCode/${phone}`,method:'get'});

// 注册
// /api/user/passport/register  POST  phone code password
export const reqUserRegister = (data)=>requests({url:`user/passport/register`,data,method:'post'});

// 登录
// /api/user/passport/login  POST  phone password
export const reqUserLogin = (data)=>requests({url:`user/passport/login`,data,method:'post'});

//获取用户信息[需要带着用户的token向服务器要用户信息]
// /api/user/passport/auth/getUserInfo    GET
export const reqUserInfo = ()=>requests({url:`user/passport/auth/getUserInfo`,method:'get'});

// 退出登录
// /api/user/passport/logout  GET
export const reqLogout =()=>requests({url:'/user/passport/logout',method:'get'});

// 获取用户地址信息
// /api/user/userAddress/auth/findUserAddressList   GET
export const reqAddressInfo =()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

// 获取商品清单
// /api/order/auth/trade   GET 
export const reqOrderInfo =()=>requests({url:'/order/auth/trade',method:'get'});

// 提交订单的接口
// /api/order/auth/submitOrder?tradeNo={tradeNo}   POST
export const reqSubmitOrder =(tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

// 获取支付信息
// /api/payment/weixin/createNative/{orderId}  GET
export const reqPayInfo =(orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

// 获取支付订单状态
// /api/payment/weixin/queryPayStatus/{orderId}}  GET
export const reqPayStatus =(orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

// /api/order/auth/{page}/{limit}  get
export const reqMyOrderList = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'});
