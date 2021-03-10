import request from '@/utils/request'

export function messageList(){
    return request({
        url:'/showMessage',
        method:'get',
    })
}

export function messageAdd(data){
    return request({
        url:'/insertAllMessage',
        method:'post',
        data
    })
}

export function messageDel(params){
    return request({
        url:'/delOneMessage',
        method:'get',
        params
    })
}

export function messageByAdress(data){
    return request({
        url:'/searchaddressid',
        method:'post',
        data
    })
}