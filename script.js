// U08282838

// Stop default sumbmission to stop auto reload
document.getElementById("feedbackform").addEventListener("submit",(event)=>
{
    event.preventDefault();

    const name = document.getElementById("name").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    if (!name || !rating || !comments)
    {
        alert('Please fill out all fields.');
        return;
    }
    // display feedback
    document.getElementById("feedbackDisplay").innerHTML
})