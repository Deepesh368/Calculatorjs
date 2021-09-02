function button_value(num)
{
    let display = document.getElementById("display_box").value;
    display += num;
    document.getElementById("display_box").value = display;
}

function clear_all()
{
    document.getElementById("display_box").value = "";
}

function delete_val()
{
    let display = document.getElementById("display_box").value;
    display = display.slice(0,-1);
    document.getElementById("display_box").value = display;
}

function result()
{
    let display = document.getElementById("display_box").value;
    let result_val;
    try
    {
        if(display == "")
        {
            result_val = "";
        }
        else
        {
            result_val = eval(display);
        }
    }
    catch(err)
    {
        result_val = "Invalid";
    }
    document.getElementById("display_box").value = result_val;
}