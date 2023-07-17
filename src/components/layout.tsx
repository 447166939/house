import {Grid} from "@mui/material";
import Header from "@/components/Header";

export interface ILayout{

}
const Layout:React.FC<ILayout>=({children})=>{
    return (
        <Grid container direction={'column'}>
            <Header />
            <Grid item>{children}</Grid>
        </Grid>
    )
}
export default Layout
