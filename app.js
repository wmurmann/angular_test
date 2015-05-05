var app = angular.module("comment_feed",[]);
app.controller("comment_updater",function($scope)
{
    $scope.commentList=["This is the first commnet","Here's the second comment","And this is one More","Here is another one"]; 
    $scope.add_comment = function()
    {
        if($scope.comment_input=="")
        {
            window.alert("You must enter a comment to update the comment feed.");
        }else
        {
            $scope.commentList.push($scope.comment_input);
        }
    };
}