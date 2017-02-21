function extract() {
	console.log("hellow")
	var data = JSON.parse($('#in').val());
	console.log(data);

	var out = '';

	out += data.clusters[0].hsv.join('\t')
	out += '\t' + data.clusters[1].hsv.join('\t')
	out += '\t' + data.clusters[2].hsv.join('\t')
	out += '\t' + data.stats.hsv.s.median;
	out += '\t' + data.stats.hsv.s.min;
	out += '\t' + data.stats.hsv.s.max;
	out += '\t' + data.stats.hsv.v.median;
	out += '\t' + data.stats.hsv.v.min;
	out += '\t' + data.stats.hsv.v.max;

	$('#out').text(out);
	console.log(out);
}

$('#run').click(extract);