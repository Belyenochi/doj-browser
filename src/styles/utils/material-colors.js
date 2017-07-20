
dynamicLoad('https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js', () => {
    const uls = $('.color-group > ul').map((index, ul) => {
        const name = $('.main-color > .name', ul).text();
        const lis = $('li.color', ul).map((index, li) => {
            const shade = $('.shade', li).text();
            const hex = $('.hex', li).text();
            return {
                shade,
                hex,
            };
        })
        return {
            name,
            lis
        };
    })

    const dict = uls.toArray().reduce((acc, value) => {
        const { name, lis } = value;
        lis.toArray().forEach((li) => {
            const { shade, hex } = li;
            const namePart = name && name.replace(' ', '-').toLowerCase()
            const shadePart = shade && shade.toLowerCase()
            const key = [namePart, shadePart].filter((value) => !!value).join('-');
            acc[key] = hex;
        }, this);
        return acc;
    }, {});

    const keys = Object.keys(dict).sort((a, b) => {
      const listA = a.match(/(.+-)*([^-]+)$/);
      const listB = b.match(/(.+-)*([^-]+)$/);
      const preA = listA[1] || '';
      const preB = listB[1] || '';
      const sufA = Number.isNaN(Number(listA[2])) ? listA[2] : Number(listA[2]);
      const sufB = Number.isNaN(Number(listB[2])) ? listB[2] : Number(listB[2]);
      if (preA !== preB) {
        return preA < preB ? -1 : 1;
      } else {
        return sufA < sufB ? -1: 1;
      }
    });
    const len = Math.max(...keys.map((str) => str.length)) + 4;
    const part1 = keys
        .map((key) => {
            const value = dict[key];
            return `@${key.padEnd(len)}: ${value};`;
        })
        .join('\n');
    const part2 = `

@material-colors:
  ${keys.join(',\n  ')}
;
`;
    const result = part1 + part2;
    console.log(result);
});
