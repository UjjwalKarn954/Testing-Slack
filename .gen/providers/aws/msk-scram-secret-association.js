"use strict";
// https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html
// generated from terraform resource schema
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MskScramSecretAssociation = void 0;
var cdktf = require("cdktf");
/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association}
*/
var MskScramSecretAssociation = /** @class */ (function (_super) {
    __extends(MskScramSecretAssociation, _super);
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://www.terraform.io/docs/providers/aws/r/msk_scram_secret_association.html aws_msk_scram_secret_association} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options MskScramSecretAssociationConfig
    */
    function MskScramSecretAssociation(scope, id, config) {
        var _this = _super.call(this, scope, id, {
            terraformResourceType: 'aws_msk_scram_secret_association',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        }) || this;
        _this._clusterArn = config.clusterArn;
        _this._secretArnList = config.secretArnList;
        return _this;
    }
    Object.defineProperty(MskScramSecretAssociation.prototype, "clusterArn", {
        get: function () {
            return this.getStringAttribute('cluster_arn');
        },
        set: function (value) {
            this._clusterArn = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskScramSecretAssociation.prototype, "clusterArnInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._clusterArn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskScramSecretAssociation.prototype, "id", {
        // id - computed: true, optional: true, required: false
        get: function () {
            return this.getStringAttribute('id');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskScramSecretAssociation.prototype, "secretArnList", {
        get: function () {
            return this.getListAttribute('secret_arn_list');
        },
        set: function (value) {
            this._secretArnList = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MskScramSecretAssociation.prototype, "secretArnListInput", {
        // Temporarily expose input value. Use with caution.
        get: function () {
            return this._secretArnList;
        },
        enumerable: false,
        configurable: true
    });
    // =========
    // SYNTHESIS
    // =========
    MskScramSecretAssociation.prototype.synthesizeAttributes = function () {
        return {
            cluster_arn: cdktf.stringToTerraform(this._clusterArn),
            secret_arn_list: cdktf.listMapper(cdktf.stringToTerraform)(this._secretArnList)
        };
    };
    // =================
    // STATIC PROPERTIES
    // =================
    MskScramSecretAssociation.tfResourceType = "aws_msk_scram_secret_association";
    return MskScramSecretAssociation;
}(cdktf.TerraformResource));
exports.MskScramSecretAssociation = MskScramSecretAssociation;
