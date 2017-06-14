/**
 *
 * @title 选择年月
 * @description 以「年月」为基本单位，基础的年月选择控件
 */

const format2 = 'YYYY-MM';

class Demo2 extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col md={12}>
                        <MonthPicker

                            format={format2}

                            onSelect={onSelect}

                            onChange={onChange}

                            locale={zhCN}

                            placeholder={'选择年月'}

                        />
                    </Col>
                </Row>
            </div>
        )
    }
}