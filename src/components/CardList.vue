<script>
import { getRandomUser } from "../api";
import Card from "./Card.vue"
    export default{
        data() {
            return {
                users : []
            };
        },
        async mounted() {
            const response = await getRandomUser(15)
            // console.log(users.data[1])
            this.users = response.data
            //users에 response.data가 추가된다.... 

        },
        components: { Card }
    }
</script>
<template>
        <div class="card-list">
            <Card 
                v-for="user of users"
                :imageUrl="user.avatar"
                :name="user.username"
                :birth="user.date_of_birth"
                :key="user.id"
                ></Card>
        
        </div>
</template>
<style>
    .card-list {
                    display:flex;
                    flex-wrap: wrap;
                    gap:15px;  
                    /* 간격 */
                    justify-content: center;
                    flex-direction: row;
                    /* direction 방향. 기본값은 row  */
                }
        @media only screen and (max-width: 600px) {
            .card-list .card {
                width : 80%;
            }

      }
</style>