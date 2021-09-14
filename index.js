let init = () => {
    console.log('bored? here are some ideas:');
}

const activity_url = "https://www.boredapi.com/api/activity";

const container = document.querySelector('#activity-container');
const listContainer = document.querySelector('#list-container');
const listName = document.querySelector('#list-name')
const randomButton = document.querySelector('#random-button');
const formSave = document.querySelector('form-save');
const formList = document.querySelector('#selected-activities');


let selectActivity = (event) => {
    //this function is to actually handle the selection of activities so that they can be saved on submit
    //rn i'm thinking that, when someone clicks 'save' on an activity, it moves it down to a selection below. once they have a list they want to save, they give it a name, and click 'submit', which will trigger the saveActivity fucntion to actually save the list to the db!
    event.preventDefault();
    const selectedActivity = event.target.parentNode;
    console.log(event.target.parentNode);
    console.log()
    formList.append(selectedActivity);
}

let saveActivity = (event) => {
        //this function saves specific selected activities to a local db list
        event.preventDefault();

        //here's where we could add the fetch POST to save these to the local db
}

let deleteActivity = (event) => {
    //this funtion deletes activities off of a list
    console.log(event);
    console.log(event.target.parentNode);
    event.target.parentNode.remove();

    //would like to also add a section of this regarding DELETE fetch, so that we can delete items that were saved to a local db list

}

let callSavedActivity = () => {
    //this function lets you click on the title/heading/whatever of a saved list and see the items on the list

    //this would likely be a get request to the local db, and would show them on the page

}

let renderActivity = (data) => {
    //console.log(data)
    const newActivity = data;
    console.log(newActivity);

    const newLi = document.createElement('li');
    newLi.textContent = newActivity;
    listContainer.appendChild(newLi);

    const saveButton = document.createElement('button');
    saveButton.textContent = "save";
    newLi.appendChild(saveButton);
    saveButton.addEventListener('click', selectActivity);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete-button';
    newLi.appendChild(deleteButton);
    deleteButton.addEventListener('click', deleteActivity);
}

let fetchData = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => renderActivity(data.activity))
}

let activityFactory = (event) => {
    event.preventDefault;
    fetchData(activity_url);   
}


randomButton.addEventListener('click', activityFactory)

let testFunction = () => {
    console.log("Hey guys, I'm a troll")
}







//deliverables to aim for:
//randomize button, click event DONE QUICKANDIRTY
//add to a list DONE QUICKANDIRTY

//NEW - need to save these lists to a local db, maybe allow the user to give each list a name with a submit form
//then the user can choose which list they want to look at, and while looking at the list they can delete items if they want to

//another stretch goal possibly, allow the user to save activity ideas that they love to a local db, and then they can randomly select from their pile there too

//choose from a drop down menu of types if you have an idea of what you might be interested in



document.addEventListener('DOMContentLoaded', init);


