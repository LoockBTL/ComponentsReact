import { FC, useState } from 'react'
import { Button, Card, Container, Form, InputGroup } from 'react-bootstrap'
import Value from 'values.js'

// https://noeldelgado.github.io/shadowlord/#7e00e4
// https://noeldelgado.github.io/shadowlord/#7e00e4
// https://www.youtube.com/watch?v=AknTq0LxoI8&ab_channel=CodingShiksha
const ColorGenerator: FC = () => {
  const [color, setColor] = useState<string>('')
  const [colorList, setColorList] = useState<any[]>([])

  const createColors = () => {
    try {
      let colors = new Value(color).all(1)
      console.log(colors)
      setColorList(colors)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container>
      <Card>
        <Card.Header>Color Generator</Card.Header>
        <Card.Body>
          <InputGroup>
            <Form.Control
              value={color}
              onChange={(e) => {
                setColor(e.target.value)
              }}
            />
            <Button
              onClick={() => {
                createColors()
              }}
            >
              Create
            </Button>
          </InputGroup>
          <Card.Text>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              {colorList.map((obj) => (
                <div
                  key={obj.hex}
                  style={{
                    backgroundColor: `#${obj.hex}`,
                    width: '100px',
                    height: '200px',
                  }}
                >
                  #{obj.hex}
                </div>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ColorGenerator
