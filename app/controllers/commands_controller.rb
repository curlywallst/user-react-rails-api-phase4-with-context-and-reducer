class CommandsController < ApplicationController
    before_action :authorize

    def index
        user = current_user
        commands = user.commands
        render json: commands
    end

    def create
        user = User.find_by(id: session[:user_id])
        command = user.commands.create(command_params)
        render json: command
    end

    def show
        user = User.find_by(id: session[:user_id])
        command = user.commands.find_by(id: params[:id])
        if command
            render json: command
        else
            render json: {error: "Not found"}, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        command = user.commands.find_by(id: params[:id])
        if command
            command.destroy
        else
            render json: {error: "Not found"}, status: :unauthorized
        end
    end

    private

    def command_params
        params.permit(:name, :language, :usage)
    end

    def authorize
        return render json: {error: "Not authorized"}, status: :unauthorized unless session.include? :user_id
    end

end
