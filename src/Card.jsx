import React from "react";

export function Card() {
    return (
        <div>
            <div class="card" >
                <div class="card-body">
                    <h5 class="card-title">Home Food</h5>
                    <p class="card-text">Food should be fun!</p>
                      
                </div>
                <img src="https://www.abetterchoice.com.au/app/uploads/2018/10/shutterstock_684164470.jpg" class="card-img-top" alt="..."></img>
                <a href="https://www.swiggy.com/" class="btn btn-primary">Order Now</a>
            </div>
        </div>
    )
}