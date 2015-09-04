from Tkinter import *

root = Tk()
wid = 800
hei = 800
w = Canvas(root, scrollregion=(0,0,wid,hei), bg="white", width=wid, height=hei)
w.pack()

def drawDragon(n):
  turns = []
  for i in range(n):
    newturns = []
    newturns.append(1)
    last = 1
    for turn in turns:
      newturns.append(turn)
      last *= -1
      newturns.append(last)
    turns = newturns

  location = [100,150]
  w.create_rectangle(2*location[0],2*location[1],2*location[0]+2,2*location[1]+2,fill='black',width=0)
  location[0] += 1
  lastDirection = [1,0]
  for turn in turns:
    w.create_rectangle(2*location[0],2*location[1],2*location[0]+2,2*location[1]+2,fill='black',width=0)
    newDirection = [lastDirection[1]*turn,lastDirection[0]*-1*turn]
    location[0] = location[0] + newDirection[0]
    location[1] = location[1] + newDirection[1]
    lastDirection = newDirection
  w.create_rectangle(2*location[0],2*location[1],2*location[0]+2,2*location[1]+2,fill='black',width=0)


drawDragon(16)

root.mainloop()