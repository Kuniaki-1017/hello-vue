export default {
    // gettersは毎回returnを返すのでアロー関数を使った方が楽(returnを省略できる書き方がある)
    message: state => state.message
}