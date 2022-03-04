import { Stack } from './types';

import './StackItem.scss';

type ComponentProps = Stack & {
    range: {
        beg: number;
        end: number;
    }
}

function StackItem({ range, beg, end, name, color, basic }: ComponentProps) {
    const experience = (end || range.end) - beg;
    const yearsLength = range.end - range.beg + 1;
    const columnSize = (100 / yearsLength);

    return (
        <div class={`stack ${end ? 'inactive' : 'active'}`}>
            <div class="info">
                {basic && (
                    <span class="status">Main</span>
                )}
                {end && (
                    <span class="status">Not actual</span>
                )}
                <div
                    class="icon"
                    style={{
                        'background': `linear-gradient(${color[1]}, ${color[0]})`,
                    }}
                ></div>
                <div class="name">{name}</div>
            </div>
            <div class="exp">
                <span class="number">{experience}</span>
                <span class="label">{(experience === 1) ? 'year' : 'years'} experience</span>
            </div>
            <div class="timeline">
                <div class="bar">
                    <div class="container">
                        <div
                            class="moment"
                            style={{
                                'left': `${(beg - range.beg) * columnSize}%`,
                                'right': `${(range.end - (end || range.end)) * columnSize}%`,
                            }}
                        >
                            <span class="beg">{beg}</span>
                            <span class="end">{end || 'today'}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StackItem;