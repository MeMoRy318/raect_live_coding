import {Component} from "react";
import {commentService} from "../../service/commentService";
import {carsService} from "../../service/carsService";
import {Car} from "../Car/Car";

export class Cars  extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: [],
        }
    }

    async componentDidMount() {
        try {
            const { data: cars } = await carsService.getAll();
            this.setState({ cars });
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const {cars} = this.state

        return (
            <div style={{
                display: "flex",
                flexDirection: "column"
            }}>
                <ul>
                    <li><h3>cars</h3></li>
                    {
                        !!cars?.length
                            ? cars.map(cars => <Car key={cars.id} cars={cars}/>)
                            : <div>not comments</div>
                    }
                </ul>
            </div>
        )
    }
}
