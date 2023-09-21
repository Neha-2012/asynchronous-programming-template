
const dom ={
    root:document.getElementById('root')
};

//API
const getJoke =async()=>{
    try{
        const res = await fetch('https://v2.jokeapi.dev/joke/Any');
        if(!res.ok){
            throw new error(
                `Failed to fetch posts with status : ${res.status}`,
            )
        }
        const data = await res.json()
        console.log(data)
        return data;
          
    }
    catch(err){
        console.error(err)

    }
};

const createJoke = (jokeType)=>{
//container
const jokeContainer = document.createElement('div');
jokeContainer.classList.add('jokeContainer');


//type
 const type = document.createElement('p');
 type.innerText =jokeType.type

 // joke
 const joke = document.createElement('p');
 joke.innerText = jokeType.joke

//language
const lang =document.createElement('p');
lang.innerText = jokeType.lang


jokeContainer.append(type,joke,lang);
return jokeContainer;

}

//handler
const jokeHandler= async()=>{
    const jokes = await getJoke();
    //jokes.forEach=((jokeType)=>{
        const jokeDom = createJoke(jokes);
        dom.root.append(jokeDom);
    //});
}

//listner
window.addEventListener('load',jokeHandler)