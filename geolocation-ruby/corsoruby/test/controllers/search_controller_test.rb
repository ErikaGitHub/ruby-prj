require 'test_helper'

class SearchControllerTest < ActionController::TestCase
  test "should get pharmacy" do
    get :pharmacy
    assert_response :success
  end

end
