require 'test_helper'

class InvitesControllerTest < ActionController::TestCase
  setup do
    @invite = invites(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:invites)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create invite" do
    assert_difference('Invite.count') do
      post :create, invite: { attending_ceremony: @invite.attending_ceremony, attending_reception: @invite.attending_reception, dietry_requirements: @invite.dietry_requirements, first_viewed_at: @invite.first_viewed_at, invited_to_ceremony: @invite.invited_to_ceremony, invited_to_reception: @invite.invited_to_reception, most_recently_viewed_at: @invite.most_recently_viewed_at, name: @invite.name, url: @invite.url }
    end

    assert_redirected_to invite_path(assigns(:invite))
  end

  test "should show invite" do
    get :show, id: @invite
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @invite
    assert_response :success
  end

  test "should update invite" do
    patch :update, id: @invite, invite: { attending_ceremony: @invite.attending_ceremony, attending_reception: @invite.attending_reception, dietry_requirements: @invite.dietry_requirements, first_viewed_at: @invite.first_viewed_at, invited_to_ceremony: @invite.invited_to_ceremony, invited_to_reception: @invite.invited_to_reception, most_recently_viewed_at: @invite.most_recently_viewed_at, name: @invite.name, url: @invite.url }
    assert_redirected_to invite_path(assigns(:invite))
  end

  test "should destroy invite" do
    assert_difference('Invite.count', -1) do
      delete :destroy, id: @invite
    end

    assert_redirected_to invites_path
  end
end
