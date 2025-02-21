<template>
   <! -pasting bellow template- !>
   <v-container>
        <v-card color="#CEB1BE" >
            <v-card-title>
                <div class="text-h3">Our Menu</div>
            </v-card-title>
        </v-card>
    </v-container>

    


   <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
            <v-row>
                <v-col cols="12" md="4" v-for="item in menuItems" :key=item>
                
             


                        <v-card color="#CEB1BE">
                            <v-card-item>
                                <v-card-title>{{ item.name }}</v-card-title>

                                <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="400px" width="700px" :src="item.image" cover ></v-img>
                    

                            <v-card-text>
                            {{ item.price }}
                           
                            <v-btn variant="elevated" @click="addToOrder(item)">
                            Order 
                            </v-btn>

                            </v-card-text>
                        </v-card>
                        </v-col>
                        </v-row>
                        </v-container>
                        </v-card>
                        </v-container>

<v-container>
        <v-card color="#CEB1BE" >
            <v-card-title>
                <div class="text-h6">Current order: {{totalOrderAmount}}</div>
            </v-card-title>
        </v-card>
    </v-container>
    <v-container>
        <v-card class="mx-auto" elevation="24">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4" v-for="item in orderItems" :key=item>
                        <v-card color="#CEB1BE">
                            <v-card-item>
                            <v-card-title>{{ item.name }}</v-card-title>

                            <v-card-subtitle>{{ item.description }}</v-card-subtitle>
                            </v-card-item>
                            <v-img height="200px" :src="item.image" cover ></v-img>

                            <v-card-text>{{ item.price }}</v-card-text>
                        </v-card>
                        </v-col>
                </v-row>
            </v-container>
        </v-card>
    </v-container>
    </template>

    <script setup>

const menuItems = 
[
{
name: "Tomahawk Ribeye",
price: 2500,
description: "Medium Rare",   
size: "None",      
offers: "None",
image: "./public/toms.jpeg"
},
{
name: "Grilled Chicken Breast",
price: 3000,
description: "Juicy,Smoked",
size: "None",
offers: "None",
image: "./public/chicken.jpg"
},
{
name: "Seared Salmon",
price: 2700,
description: "Fillet",
size: "Large",
offers: "None",
image: "./public/salmon.jpg"
},
{
name: "Goat Curry",
price: 2900,
description: "Herb Infused",
size: "Large",
offers: "None",
image: "./public/goatmatata.jpeg"
},
{
name: "French Fries",
price: 1200,
description: "Best fries in town",
size: "Large",
offers: "None",
image: "./public/fries.jpeg"
},
{
name: "Ugali",
price: 4200,
description: "Pronounced 'uh-gh-a-li",
size: "None",
offers: "None",
image: "./public/ugali.jpeg"
},
]
var orderItems = []
var totaiOrderAmount=0

function calculateTotalAmount(price){
    totalOrderAmount += price
}

function addToOrder(item){
    orderItems.push(item)
    calculateTotalAmount(item.price)
}








</script>
