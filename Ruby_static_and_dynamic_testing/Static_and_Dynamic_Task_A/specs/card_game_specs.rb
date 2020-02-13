require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')
require_relative('../card')

class TestCardGame < Minitest::Test

  def setup

    @card1 = Card.new("spade", 6)
    @card2 = Card.new("hearts", 4)
    @card3 = Card.new("ace", 1)

    @cards = [@card1, @card2, @card3]

    @card_game = CardGame.new()

  end


def test_checkforAce
  actual = @card_game.checkforAce(@card3)
  assert_equal(true, actual)
end

#
def test_highest_card
  actual = @card_game.highest_card(@card1, @card2)
  assert_equal(actual, @card1)
end


def test_cards_total
  actual = @card_game.cards_total(@cards)
  assert_equal(actual, "You have a total of 11")
end


end
