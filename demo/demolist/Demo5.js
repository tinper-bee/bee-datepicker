/**
 *
 * @title 选择周
 * @description 以「周」为基本单位，基础的周选择控件
 */


function onSelect(d) {
    console.log(d)
}


function onChange(d) {
    console.log(d)
}


class Demo5 extends Component {
    render() {

        return (
            <div>
                <Row>
                    <Col md={12}>
                        <WeekPicker placeholder="选择周"/>
                    </Col>
                </Row>
            </div>
        )
    }
}