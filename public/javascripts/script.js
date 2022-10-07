function onDelete(userId, userName) {
	if (confirm("Sure to delete user " + userName + "?")) {
		window.location.href = "/users/delete/" + userId;
	}
}