import request from '@/utils/request'

let music={
    querymusic:(data)=>request.post('/api/querymusic',data)
}
export default music;