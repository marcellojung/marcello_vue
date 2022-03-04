<script>
export default {
    props: {
        imageUrl:String,
        name:String,
        birth:String
        },
    data() {
        return { color:""}
    },
    computed : {
        compareBirth() {
            console.log("compareBirth invoked incomputed")
            if(Date.parse(this.birth) < Date.parse('1980-01-01')) {
                this.color = "green"
                return 'older'
            } else {
                this.color = "red"
                return 'younger'
            }
        }
    },
//     methods : {
//         compareBirth() {
//         console.log("compareBirth invoked in method")
//             if(Date.parse(this.birth) < Date.parse('1970-01-01')) {
//                 return 'older'
//             } else {
//                 return 'younger'
//             }
//         }
//     }
}
</script>

<template>
    <div class="card">
        <img :src="imageUrl" alt="profile image" class="card__img">
        <h2 class="card__name">{{name}}</h2>
        <h3>{{ birth }}</h3>
        <h3 class="card__birth">{{compareBirth}}</h3>
        <!-- <h2 class="card__birth">{{(Date.parse(birth) < Date.parse('1970-01-01')) ? 'older':'younger'}}</h2> -->
    </div>
</template>
<style scoped>
/* <style> */
            .card {
                display:flex;
                flex-direction: column;   /* 위에서 아래로...  */
                justify-content: center;
                align-items: center;
                /* gap: 10px; */
                width : 200px;
                height : 250px;
                background-color: cadetblue;
                box-shadow: 1px 1px 10px gray;
                /* 그림자 처리  */
            }
            .card__img {
                width:100px;
                height: 100px;
                object-fit: cover;
                border-radius: 100%;
                border: solid 2px;
                padding: 5px;
                background-color: white;
            }
            .card__name{
                font-weight: 700;
            }
            .card__birth{
                font-weight: 300;
                color:v-bind(color)
                /* font-size:20px; */
            }
</style>
