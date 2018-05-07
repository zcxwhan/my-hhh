

window.onload = function  () {
	
	mui('.movie-list').on('tap', '.movie-item', function  () {
		let id = this.getAttribute('data-id')
		mui.openWindow({
			url: 'detail.html',
			id: 'detail.html',
			styles: {
				top: '0px',bottom: '0px'
			},
			extras: {
				//这里不要直接写id
				_id:id
			}
		})
	})
	
}