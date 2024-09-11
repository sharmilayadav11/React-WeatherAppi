import TextField from '@mui/material/TextField';

export default function SearchBox() {
    return (
        <div>
            <h3>Search for the Wearther</h3>
            <form action="">
                <TextField id="outlined-basic" label="City Name" variant="outlined" />
            </form>
        </div>
    )
}