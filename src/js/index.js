var vm = new Vue({
    el:"#app",
    data:{
        pagesize:10,
        pageno:1,
        datalist:{}
    },
    created(){
        fetch('./data.json').then((res)=>res.json()).then((res)=>{
            console.log(res)
            this.datalist=res.data;
        })
    }
})