/**
 * @file 双树选择器。
 * @author Han Bing Feng (hanbingfeng@baidu.com)
 */

define(function (require) {
    var _ = require('underscore');
    var React = require('react');
    var Tree = require('./Tree.jsx');
    var treeUtil = require('./core/treeUtil.es6');

    var DualTreeSelector = React.createClass({
        propTypes: {
            /**
             * 左子树的初始节点列表
             */
            leftTreeNodes: React.PropTypes.arrayOf(Tree.treeNodeType),
            /**
             * 右子树的初始节点列表
             */
            rightTreeNodes: React.PropTypes.arrayOf(Tree.treeNodeType),
            /**
             * 左子树的宽度，px
             */
            leftTreeWidth: React.PropTypes.number,
            /**
             * 右子树的宽度，px
             */
            rightTreeWidth: React.PropTypes.number,
            /**
             * 选择器中树的高度，px
             */
            height: React.PropTypes.number,
            /**
             * 左树的标题
             */
            leftTreeTitle: React.PropTypes.string,
            /**
             * 右树的标题
             */
            rightTreeTitle: React.PropTypes.string,
            /**
             * 左树左下角的提示话术
             */
            textLeftTreeSummary: React.PropTypes.string,
            /**
             * 右树的节点叶子限制
             */
            rightTreeLimit: React.PropTypes.number
        },

        getDefaultProps: function () {
            return {
                leftTreeWidth: 310,
                rightTreeWidth: 310,
                height: 380,
                leftTreeTitle: '可选项目',
                rightTreeTitle: '已选项目'
            };
        },

        onTreeNodeRemoveClicked: function (removedTreeNode, from) {
            var dstTreeNodes = this.ref[
                from === 'left' ? 'rightTree' : 'leftTree'
            ].state.treeNodes;

            treeUtil.markTreeNodeRemoved(removedTreeNode);

            treeUtil.copyNodeToTreeNodes(
                treeUtil.getPathToRoot(removedTreeNode),
                dstTreeNodes
            );
        },

        render: function () {
            var {
                leftTreeWidth,
                rightTreeWidth,
                leftTreeTitle,
                rightTreeTitle,
                height,
                textLeftTreeSummary
            } = this.props;

            return <div className='fcui2-dual-tree-selector'>
                <div className='fcui2-dual-tree-selector-left-tree-wrapper'>
                    <div className="fcui2-dual-tree-selector-tree-title">{leftTreeTitle}</div>
                    <Tree style={{width: leftTreeWidth, height: height}}
                        treeNodes={this.state.leftTreeNodes}
                        onTreeNodeRemoveClicked={(treeNode) => {
                            this.moveTreeNode(treeNode, 'left');
                        }}
                        ref='leftTree' />
                    <div className='fcui2-dual-tree-selector-tree-footer'>
                        <span className='fcui2-dual-tree-selector-tree-footer-summary'>{textLeftTreeSummary}</span>
                    </div>
                </div>
                <div className='fcui2-dual-tree-selector-separator' style={{lineHeight: height + 'px'}}></div>
                <div className='fcui2-dual-tree-selector-right-tree-wrapper'>
                    <div className='fcui2-dual-tree-selector-tree-title'>{rightTreeTitle}</div>
                    <Tree style={{width: rightTreeWidth, height: height}}
                        treeNodes={this.state.rightTreeNodes}
                        onTreeNodeRemoveClicked={(treeNode) => {
                            this.moveTreeNode(treeNode, 'right');
                        }}
                        ref='rightTree' />
                    <div className='fcui2-dual-tree-selector-tree-footer'>
                        <span className='fcui2-dual-tree-selector-tree-footer-summary'>
                        </span>
                        <span className='fcui2-dual-tree-selector-tree-footer-remove-all'>
                            <a href='javascript:;' onClick=''>全部删除</a>
                        </span>
                    </div>
                </div>
                <div style={{clear: 'both'}}></div>
            </div>;
        }
    });

    return DualTreeSelector;
});
