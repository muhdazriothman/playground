'use strict';

function smashTheBricks(bigHits, newtons) {
    const valueToIndices = new Map();

    newtons.forEach((value, index) => {
        valueToIndices.set(value, index + 1);
    });

    const sortedNewtons = [...newtons].sort((a, b) => b - a);

    const blowsAggregate = {
        total: 0,
        bigHammerBricks: [],
        smallHammerBricks: []
    }

    let bigHitUsed = 0;

    for (let i = 0; i < sortedNewtons.length; i++) {
        const index = valueToIndices.get(sortedNewtons[i]);

        if (bigHits !== 0 && bigHitUsed < bigHits) {
            blowsAggregate.total += 1;

            bigHitUsed += 1;

            blowsAggregate.bigHammerBricks.push(index);
        } else {
            blowsAggregate.total += sortedNewtons[i];
            blowsAggregate.smallHammerBricks.push(index);
        }
    }

    if (blowsAggregate.bigHammerBricks.length === 0) {
        blowsAggregate.bigHammerBricks.push(-1);
    }

    if (blowsAggregate.smallHammerBricks.length === 0) {
        blowsAggregate.smallHammerBricks.push(-1);
    }

    return [
        [blowsAggregate.total],
        [blowsAggregate.bigHammerBricks.sort((a, b) => a - b).join(' ')],
        [blowsAggregate.smallHammerBricks.sort((a, b) => a - b).join(' ')]
    ]
}

smashTheBricks(2, [4, 1, 5]);