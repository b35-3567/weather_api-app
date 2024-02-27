import {View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Demo1 = () => {
  const players = [
    {name: 'Messi', goals: 31},
    undefined,
    {name: 'Ronaldo', goals: 28},
    {name: 'Neymar', goals: 22},
    {goals: 2},
    {name: 'Mbappé', goals: 25},
    {name: 'Pele', goals: null}
  ]
  // hàm check dữ liệu
  let cauThu = []
  let cauThuBanThangLonNhat = null
  let banThangLonNhat = 0
  for (let index = 0; index < players.length; index++) {
    const element = players[index]
    if (element == undefined || element.name == undefined || element.goals == undefined || element.goals == null) {
      continue
    }
    cauThu.push(element)
    if (element.goals > banThangLonNhat) {
      banThangLonNhat = element.goals
      cauThuBanThangLonNhat = element
    }
  }
  console.log(cauThuBanThangLonNhat)

  // hàm lọc danh sách cầu thủ không ghi bàn
  // const danhSach = players
  //     .filter(player => player.goals === 0);

  const nation = 'Brazil'
  return (
    <View>
      <Text style={myDemo1Style.hello}> Xin chào mọi người {nation} </Text> <Text> Danh sách cầu thủ </Text>{' '}
      {cauThu.map((player, index) => {
        return <Text key={index}> {player.name} </Text>
      })}{' '}
    </View>
  )
}
export default Demo1
const myDemo1Style = StyleSheet.create({
  hello: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold'
  }
})
