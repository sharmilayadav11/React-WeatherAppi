import TextField from '@mui/material/TextField';

export default function SearchBox() {
    return (
        <div>
            <h3>Search for the Wearther</h3>
            <form action="">
                <TextField id="city" label="City Name" variant="outlined" />
            </form>
        </div>
    )
}