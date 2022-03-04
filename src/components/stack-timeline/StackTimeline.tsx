import { STACK_GROUPS } from './defines';
import { Stack, StackGroup } from './types';
import StackItem from './StackItem';

import './StackTimeline.scss';

function StackTimeline() {
	const range: {
		beg: number;
		end: number;
	} = {
		beg: Math.min(
			...STACK_GROUPS.map((group: StackGroup) => (
				group.stacks.map((stack: Stack) => stack.beg)
			)).flat()
		),
		end: new Date().getFullYear(),
	};

	return (
		<section class="stack-timeline" tabIndex="0">
			<div class="wrapper">
				<h4>Development Stack</h4>
				{STACK_GROUPS.map((group: StackGroup) => (
					<div class="group">
						{/* <div class="title">{group.name}</div> */}
						<div class="grid spaced">
							{group.stacks.map((stack: Stack) => (
								<StackItem range={range} {...stack} />
							))}
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

export default StackTimeline;