import { defineStore } from "pinia"
import { useToast } from "vue-toastification";

const toast = useToast()



export const useCardStore = defineStore('counter', {
    state: () => ({
        products:[
          {
            id:1,
            name:'Iphone 15',
            price:'1300',
            image:'https://cdn.pixabay.com/photo/2017/10/12/22/17/business-2846221_1280.jpg'
          },
          {
            id:2,
            name:'Samsung S22 ultra',
            price:'550',
            image:'https://cdn.pixabay.com/photo/2022/03/12/09/23/smartphone-7063761_640.jpg'
          },
          {
            id:3,
            name:'airplane',
            price:'300',
            image:'https://cdn.pixabay.com/photo/2020/03/27/19/27/airplane-4974678_640.jpg'
          },
          {
            id:4,
            name:'LCD TV Smart',
            price:'350',
            image:'https://cdn.pixabay.com/photo/2019/06/30/18/19/tv-4308537_640.jpg'
          }
        ],

        cardItems: []
        
     }),
    getters: {
      countCardItems(state){
        return state.cardItems.length
      }
    },
    actions: {
      addToCard(Item) {
        let index = this.cardItems.findIndex(product => product.id === Item.id)
        if(index !== -1){
          this.cardItems[index].quantity += 1
          toast.success("Your item has been added", {
            timeout:2000
          })
        }else{
          Item.quantity = 1
          this.cardItems.push(Item)
          toast.success("Your item has been saved", {
            timeout:2000
          })
        }
      },
      Count(item){
        let index = this.cardItems.findIndex(product => product.id === item.id)
        if(index !== -1){
          this.cardItems[index].quantity += 1
          toast.success("Your order has been updated!", {
            timeout:2000
          })
        }
      },
      unCount(item){
        let index = this.cardItems.findIndex(product => product.id === item.id)
        if(index !==-1){
          this.cardItems[index].quantity -= 1
          if(this.cardItems[index].quantity === 0){
            this.cardItems = this.cardItems.filter(product => product.id !== item.id)
          }
          toast.success ("Your order has been updated!", {
            timeout:2000
          })
        }
       
      },
      removeFromCard(item){
        this.cardItems = this.cardItems.filter(product => product.id !== item.id)
        toast.success ("Your order has been removed!", {
          timeout:2000
        })
      }
    },
})