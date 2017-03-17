$(function() {
	$('.add-star').click(function() {
		var $this = $(this);
		var post_id = $this.attr('data-post-id');
		$.ajax ({
			url: '/star?post_id=' + post_id,
			dataType: 'json',
			success: function(data) {
				//リクエストに成功した場合の処理
				//alert('スターを付けました');
				$this.text(data['star_count']);
			},
			error: function(data) {
				//リクエストに失敗した場合の処理
				alert('失敗しました');
			}
		});
	});
});