import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";


export default function SearchBox() {
    return (
        <div className='SearchBox'>
            <h3>Search for the Wearther</h3>
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" />
                <br />
                <br />
                <Button variant="contained">
                    Search
                </Button>

            </form>
        </div>
    )
}