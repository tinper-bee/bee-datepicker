/**
 *
 * @title 日期范围
 * @description 以「日期范围」为基本单位，基础的日期范围选择控件
 */

const format3 = 'YYYY-MM-DD';

class Demo3 extends Component {

    render() {

        return (
            <div>
                <Row>
                    <Col md={12}>
                        <RangePicker

                            format={format3}

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