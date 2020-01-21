import { Injectable } from "@angular/core";

import { Item, Category } from "./dataModel";

@Injectable()
export class DataService {
    getItems(): Array<Item> {
        return [{
            id: 1,
            name: "Manila Ultimate Tombstone Burger",
            cover: "~/app/assets/images/food.jpg",
            category: "Burger",
            categoryTag: "#2D9CDB",
            price: "300.00",
            likes: 987,
            isLike: false,
            isFavorite: true,
            comments: 13,
            rating: "4.5",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 2,
            name: "Quezon Chocolate Marble Pancake",
            cover: "~/app/assets/images/food.jpg",
            category: "Pancake",
            categoryTag: "#e4ce0d",
            price: "230.00",
            likes: 891,
            isLike: true,
            isFavorite: true,
            comments: 7,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        },
        {
            id: 3,
            name: "Binondo Black Forest Cake",
            cover: "~/app/assets/images/food.jpg",
            category: "Cake",
            categoryTag: "#27AE60",
            price: "300.00",
            likes: 730,
            isLike: true,
            isFavorite: true,
            comments: 11,
            rating: "4.0",
            description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!
				\nRatione maiores, veritatis nesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
				\nNesciunt sint dolorum sequi dicta omnis dolor blanditiis, ipsam officiis commodi temporibus quas non nobis tempore saepe necessitatibus quasi!`
        }];
    }

    getCategories(): Array<Category> {
        return [
            {
                cover: "~/app/assets/images/food.jpg",
                category: "BURGER",
                count: "13"
            },
            {
                cover: "~/app/assets/images/food.jpg",
                category: "PANCAKE",
                count: "5"
            },
            {
                cover: "~/app/assets/images/food.jpg",
                category: "CAKE",
                count: "9"
            },
            {
                cover: "~/app/assets/images/food.jpg",
                category: "BEER",
                count: "7"
            }
        ];
    }
}
