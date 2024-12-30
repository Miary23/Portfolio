# salut
.services-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin-top: 20px;
}

.services-box {
    background-color: rgb(50, 50, 50);
    border-radius: 8px;
    width: 30%;
    height: 200px;
    border: 1px solid red;
    /* box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    
    margin: 10px;
    transition: transform 0.3s; */
    overflow: auto;

}

.services-box:hover {
    transform: translateY(-5px);
}

.hidden-content {
    display: none; /* Initially hidden */
    margin-top: 10px;
    color: #555;
}

.read-more {
    color: #0077cc;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 10px;
    display: inline-block;
}


/*.services-container .services-box{
    flex: 1 1 20rem;
    background: rgb(50, 50, 50);
    padding: 3rem 2rem 4rem;
    border-radius: 2rem;
    text-align: center;
    border: 1px solid rgb(17, 3, 3);
    transition: .5s ease;
}*/

.services-container .services-box:hover{
    border-color: aqua;
    transform: scale(1.02);
}