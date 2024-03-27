<template>
    <div class="row my-4">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Subtotal</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in data.cardItems" :key="item.id">
                                <td>{{ item.id }}</td>
                                <td><img :src="item.image"
                                               width="160"
                                               height="160"
                                               class="img-fluid rounded"
                                    /></td>
                                <td>{{ item.name }}</td>
                                <td>
                                    <i class='bx bx-caret-up' style='color:rgba(0,0,0,0.42)'
                                    @click="data.Count(item)"
                                    ></i>
                                    {{ item.quantity }}
                                    <i class='bx bx-caret-down' style='color:rgba(0,0,0,0.42)'
                                    @click="data.unCount(item)"
                                    ></i>
                                </td>
                                <td>{{ item.price }}</td>
                                <td>{{ item.price * item.quantity }}</td>
                                <td>
                                <i 
                                @click="data.removeFromCard(item)"
                                class='bx bx-trash' style='color:#f00909'></i>
                             </td>
                             </tr>
                             
                             <tr>
                                <th class="text-center" colspan="3">
                                    Total
                                </th>
                                <td class="text-center" colspan="3">
                                    <span class="badge badge bg-danger tounded-pill">
                                        ${{data.cardItems.reduce((acc,item) => acc+= item.price * item.quantity, 0)}}
                                    </span>
                                </td>
                             </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
   import {useCardStore} from "@/Story/useCardStore"
   const data = useCardStore()
</script>

<style >
    i{
        cursor: pointer;
    }
    .bx-trash{
        font-size: 1.5rem;
    }
</style>