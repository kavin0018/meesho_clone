import './Head.css';

export default function Head(){
    return(
        <div className="Head">
            <div className="logo">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAACDCAMAAADMIrsKAAAAclBMVEX////0M5f0JZPzAIz0LJXzAIn0HpH95O/93uz94u7/+/3//f7+9Pn81ef/+fz94O3+6vP7vdn1PZv0SZ/5oMn3grr7y+H3dbP7wtz3e7b80OT+7/b4ib382en6r9H2Yar1U6P5p834kcH2a636ttX4mMVPJL9UAAAFBklEQVR4nO2Xi5KqOBCGJYSACihBbgKCgu//ipvuJBCdOecwtbtl7VZ/VVMT21z+NM2fuNsRBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQ/3viTwv4EZEXeMmnRfyAgXls+LSIH5Bzz/M+LWI7R9ArP61iO4fc+8/p5aT3XyMFvfmnVWyH9AKHcznP5fmg20lWR+e3Zc+nvt/rDg7nsE9O59cD96C6RmF71J9i0Duqnn2dXcPj+8Jp+iW0gajivhA+r3rVbjxfIR+u4mySGKxmd1jZ5UJF+XBxFM8VjBd5MR8WvUPb4aSsubrjk0tXVcWzTn8o98aZhzA+35huq1Bpvz/nwgbZsLfRuBOMm7CsbbBZu+aR0etJaRcQl2XV68gY4xz+bj9SnPneAhNLkzMjONKrcRTHpM37INYoF5kONut4T3RWr4O4meEPwZegP7yV3+/oTYok51aokoVS9LZRLpPjmEMPNuiH3wmM5mMOnTmPMGewdS5z6Sk14rHqVR1znIezdN0YPEuODXwW24CF1QMN95nUucrnqL9Dkz3h+ydMyC+tepNquAz4WMMlLO4XsExfwQwNlGsBWy1OaVteZDCEi15RROmxvWAu62VSv5mvfX3B/Gy2kCMsnPeYaQkTyhO0EwHvSQzFy+0iUBr2tJpgkU5H40l1EaBugL4hBlttG6hXb0bVgB0UYVIz7Q2RunJ6TmH/njBQIx+6/XQGQqpAeg3JK2zvu/okVFLTAGzK2gKUlLgbvaxyn22Leo0thKpceKUaFQi3lbyLMWUbS7j315fgpgb611UZ7+G9UP+nQtEpGlhoNoWadyZagCbQ0WGpe1UWW1vVes2nI+idlEBPm7LlBlmod5tAvbOjN1n1epFOGbiTwZT1DX3AjeL6obYa5eZK8qJ3Pd+M3is3z8MQwfN5/jN689V2rOc9zPvygi7ru3UpZb/londJpdGbQZmXq4bzyJ2a26A3+6r34uqVCu22yuBhd6jXRjEsKhxWjubAUEm+WL3L7zejd3bqDjcFeqttehMnv/dv9EI9yPIcavbA0VTc7ewET+bli68TNwcfvJjf6q0dy8H85tvze33X27/qhfeNld+Nsnb2lfI5omE1IOUbvXu0ZGc28VrPf0dvJszJasLTDV527WetjWZT93pJa8Fq8V4mtcQXvTsoI7mOAO/kX3LyPVgP9S/0Kv8N3fPi0Pg8QIOG82LZxs3nYoJzNr4/zPDQ0cusXutnaoBr6jVsfni/q/6C62/04lH3QCtAh47BfvXThWNE3RDwMgCHN8d7UOELb4L7YYwnc/Wm92D1tpAE1ugM32H+YGN6/6xX33eEmJrRx5YuHtwG84dmEii9UPnZS/SFgAnsCRYQvuvVPpDg1ckfns+G651vlLsrHT8DvUG06vX0VQJva8pR8aX3H/qwOub6PqnvywLP5nR0bVmATNjCYlWrXlUDeA4J7X5+sbEadrtTsGqc1XK+OcfVecHNmd4Oy11VyOXUPz6FVcfsBSSuPNuV+/i4Y8md5PmrL5wG3/Z0Jt1AFwS28tMhCOzcZxkE9s6U1oMfqN8zAX+Ezsiy0FFRrd7fP3OI+cGofw/t5iCQy6B7EAj7Ib6Nuqf3dCf9M6nzayRs13bi3piO0bVOnC/trq5l8n6xSqOyjNY5073zXZu4Dz5O1I/Qr5MSBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQn+Ivye1JLrywQTYAAAAASUVORK5CYII=" alt="" />
            </div>
            <div className="inp">
                <span><i class="fa-solid fa-magnifying-glass"></i></span>
                <input type="text"placeholder="try sarees or kurtis" />
            </div>
        </div>
    )
}