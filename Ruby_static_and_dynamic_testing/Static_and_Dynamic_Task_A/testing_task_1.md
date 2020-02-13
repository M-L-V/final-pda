### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card)
    if card.value = 1 #should be == not =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #syntax error - dif should be def and there is comma missing between args
    if card1.value > card2.value
      return card #should be card1
    else
      return card2
    end
  end
end       #extra end is unnecessary

def self.cards_total(cards)
  total                       #total needs to be set to zero to begin with
  for card in cards
    total += card.value
    return "You have a total of" + total #total needs to be interpolated into string and returned outside first end
  end
end

#missing end of class 
```
