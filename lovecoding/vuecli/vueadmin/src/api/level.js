import request from '@/utils/request'

export function levelList(){
    return request({
        url:'/showLevel',
        method:'get',
    })
}

export function levelAdd(data){
    return request({
        url:'/insertOneLevel',
        method:'post',
        data
    })
}

export function levelDel(params){
    return request({
        url:'/delOneLevel',
        method:'get',
        params
    })
}